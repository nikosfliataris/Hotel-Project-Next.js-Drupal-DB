import fetcher from "./fetcher";

class EntityRepository {
  constructor(type, bundle, token, drupalUrl) {
    this.token = token;
    this.drupalUrl = drupalUrl || process.env.NEXT_PUBLIC_DRUPAL_URL;
    this.type = type;
    this.bundle = bundle;
  }
  getReqGet({ id, include = [] }) {
    let url = `${this.drupalUrl}/jsonapi/${this.type}/${this.bundle}/${id}`;
    if (include.length > 0) {
      url += `?include=`;
      url += include.join(",");
    }
    return {
      url,
    };
  }
  async get({ id, include = [] }) {
    const { url } = this.getReqGet({ id, include });
    try {
      return await fetcher(url, { token: this.token, drupalType: true });
    } catch (error) {
      return Promise.reject({
        message: error,
        url: url,
      });
    }
  }

  getReqGetList({
    include = [],
    groups = [],
    filters = [],
    page = {},
    sorts = [],
    fields = [],
  }) {
    let url = this.buildListUrlWithoutPagination({
      include,
      groups,
      filters,
      sorts,
      fields,
    });
    let firstParam = !url.includes("?");

    // pagination
    if (page.limit) {
      url += `${firstParam ? "?" : "&"}page[limit]=${page.limit}`;
      firstParam = false;
    }
    if (page.offset) {
      url += `${firstParam ? "?" : "&"}page[offset]=${page.offset}`;
    }
    return {
      url,
    };
  }
  async getList({
    include = [],
    groups = [],
    filters = [],
    page = {},
    sorts = [],
    fields = [],
  }) {
    const { url } = this.getReqGetList({
      include,
      groups,
      filters,
      page,
      sorts,
      fields,
    });
    try {
      console.log(url, "uuuu");
      return await fetcher(url, { token: this.token, drupalType: true });
    } catch (error) {
      return Promise.reject({
        message: error,
        url: url,
      });
    }
  }

  async getListRecursive({
    include = [],
    groups = [],
    filters = [],
    page = {},
    sorts = [],
    fields = [],
  }) {
    const { url } = this.getReqGetList({
      include,
      groups,
      filters,
      page,
      sorts,
      fields,
    });
    return await this.listRecursive(
      url,
      { token: this.token },
      [],
      page?.limit || 50,
      page?.offset || 0
    );
  }

  async getListAll({
    include = [],
    groups = [],
    filters = [],
    sorts = [],
    fields = [],
  }) {
    const { url } = this.getReqGetList({
      include,
      groups,
      filters,
      sorts,
      fields,
    });
    return await this.listRecursiveAll(url, { token: this.token }, []);
  }

  getReqCreate({ attributes = [], relationships = [] }) {
    let body = {
      data: {
        type: `${this.type}--${this.bundle}`,
      },
    };
    if (attributes.length > 0) {
      body.data["attributes"] = this.buildAttributes(attributes);
    }
    if (relationships.length > 0) {
      body.data["relationships"] = this.buildRelationships(relationships);
    }
    const url = `${this.drupalUrl}/jsonapi/${this.type}/${this.bundle}`;
    return {
      url,
      body,
    };
  }
  async create({ attributes = [], relationships = [] }) {
    const { url, body } = this.getReqCreate({ attributes, relationships });
    try {
      return await useFetch(url, {
        method: "POST",
        body,
        token: this.token,
        drupalType: true,
      });
    } catch (error) {
      return Promise.reject({
        message: error,
        url: url,
      });
    }
  }

  getReqUpdate({ id, attributes = [], relationships = [] }) {
    let body = {
      data: {
        type: `${this.type}--${this.bundle}`,
        id: id,
      },
    };
    if (attributes.length > 0) {
      body.data["attributes"] = this.buildAttributes(attributes);
    }
    if (relationships.length > 0) {
      body.data["relationships"] = this.buildRelationships(relationships);
    }
    const url = `${this.drupalUrl}/jsonapi/${this.type}/${this.bundle}/${id}`;
    return {
      url,
      body,
    };
  }
  async update({ id, attributes = [], relationships = [] }) {
    const { url, body } = this.getReqUpdate({ id, attributes, relationships });
    try {
      return await useFetch(url, {
        method: "PATCH",
        body,
        token: this.token,
        drupalType: true,
      });
    } catch (error) {
      return Promise.reject({
        message: error,
        url: url,
      });
    }
  }

  getReqDelete({ id }) {
    const url = `${this.drupalUrl}/jsonapi/${this.type}/${this.bundle}/${id}`;
    return {
      url,
    };
  }
  async delete({ id }) {
    const { url } = this.getReqDelete({ id });

    try {
      await fetcher(url, {
        method: "DELETE",
        token: this.token,
        drupalType: true,
      });
      return true;
    } catch (error) {
      return Promise.reject({
        message: error,
        url: url,
      });
    }
  }

  buildAttributes(attributes) {
    let resp = {};
    attributes.forEach((item) => {
      resp[item.field] = item.value;
    });
    return resp;
  }

  buildRelationships(relationships) {
    let resp = {};
    relationships.forEach((item) => {
      if (item.ids) {
        let values = [];
        item.ids.forEach((id) => {
          values.push({
            type: item.type,
            id,
          });
        });
        resp[item.field] = { data: values };
      } else {
        resp[item.field] = {
          data: {
            type: item.type,
            id: item.id,
          },
        };
      }
    });
    return resp;
  }

  buildListUrlWithoutPagination({
    include = [],
    groups = [],
    filters = [],
    sorts = [],
    fields = [],
  }) {
    const { drupalUrl } = this;
    let url = `${drupalUrl}/jsonapi/${this.type}/${this.bundle}`;

    let firstParam = true;

    if (include.length > 0) {
      url += `?include=`;
      url += include.join(",");
      firstParam = false;
    }

    if (groups.length > 0) {
      groups.forEach((group) => {
        url += `${firstParam ? "?" : "&"}filter[${
          group.name
        }][group][conjunction]=${group.conjunction}`;
        if (group.memberOf) {
          url += `&filter[${group.name}][group][memberOf]=${group.memberOf}`;
        }
        firstParam = false;
      });
    }

    // filters
    if (filters.length > 0) {
      filters.forEach((filter) => {
        url += `${firstParam ? "?" : "&"}filter[${
          filter.name
        }][condition][path]=${filter.field}`;
        url += `&filter[${filter.name}][condition][value]=${filter.value}`;
        if (filter.operator) {
          url += `&filter[${filter.name}][condition][operator]=${filter.operator}`;
        }
        if (filter.memberOf) {
          url += `&filter[${filter.name}][condition][memberOf]=${filter.memberOf}`;
        }
      });
      firstParam = false;
    }

    // sort
    if (sorts.length > 0) {
      sorts.forEach((sort) => {
        url += `${firstParam ? "?" : "&"}sort[${sort.field}][path]=${
          sort.field
        }`;
        firstParam = false;
        if (sort.order) {
          url += `&sort[${sort.field}][direction]=${sort.order}`;
        }
      });
    }

    // fields
    if (fields.length > 0) {
      fields.forEach((f) => {
        const type = f.type || `${this.type}--${this.bundle}`;
        url += `${firstParam ? "?" : "&"}fields[${type}]=${f.fields.join(",")}`;
        firstParam = false;
      });
    }

    return url;
  }

  async listRecursive(url, options, acc = [], limit, offset) {
    if (offset == undefined) {
      offset = 0;
    }

    let firstParam = !url.includes("?");

    if (limit > 50) {
      url += `${firstParam ? "?" : "&"}page[limit]=50`;
      url += `&page[offset]=${offset}`;
      let res = await fetcher(url, options);
      let rec_res = acc.concat(res?.data);

      if (res.links.next) {
        return await this.listRecursive(
          url,
          options,
          rec_res,
          limit - 50,
          offset + 50
        );
      } else {
        return rec_res;
      }
    } else {
      url += `${firstParam ? "?" : "&"}page[limit]=${limit}`;
      url += `&page[offset]=${offset}`;
      let res = await fetcher(url, options);
      return acc.concat(res?.data);
    }
  }

  async listRecursiveAll(url, options, acc = []) {
    // try {
    let res = await fetcher(url, options);
    let rec_res = acc.concat(res?.data);
    return rec_res;
    //   if (res.links.next) {
    //     return await this.listRecursiveAll(
    //       res.links.next.href,
    //       options,
    //       rec_res
    //     );
    //   } else {

    //   }
    // } catch (error) {
    //   return error;
    // }
  }
}

export default EntityRepository;
