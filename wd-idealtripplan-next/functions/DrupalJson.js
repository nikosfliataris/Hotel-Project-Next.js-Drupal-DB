const testingEnityRepository = async () => {
  // Class instantiation
  const productRepository = new EntityRepository("node", "product");

  // Get single entity
  let id = "dc3ca780-7b86-4e7f-b57a-0ea8d9182fc1";
  let include = ["field_category", "field_college.field_city"];
  const product = await productRepository.get({ id, include });

  // Get list of entitties

  // filtering
  // eg (status = 1) && (date >= 2022-07-07) && (city = 'athens' || city = 'paris') && (college = 'oxford' || college = 'stanford')
  // groups of filters with different conjuncionts
  let groups = [
    {
      name: "city",
      conjunction: "OR",
      memberOf: "groupAnd",
    },
    {
      name: "college",
      conjunction: "OR",
      memberOf: "groupAnd",
    },
    {
      name: "groupAnd",
      conjunction: "AND",
    },
  ];
  let filters = [
    // simple filter, default operator '='
    {
      name: "status",
      field: "status",
      value: 1,
    },
    // simple filter with different operator
    {
      name: "date",
      field: "field_datte",
      value: "2022-07-07",
      operator: ">=",
    },
    // filters member of an OR group
    {
      name: "city1",
      field: "field_city",
      value: "athens",
      memberOf: "city",
    },
    {
      name: "city2",
      field: "field_city",
      value: "paris",
      memberOf: "city",
    },
    {
      name: "college1",
      field: "field_college",
      value: "oxford",
      memberOf: "college",
    },
    {
      name: "college2",
      field: "field_college",
      value: "stanford",
      memberOf: "college",
    },
  ];
  let sorts = [
    {
      field: "published",
      order: "ASC",
    },
    {
      field: "created",
    },
  ];
  let page = {
    limit: 25,
    offset: 25,
  };
  let fields = [
    // if we omit type, it assumes type from constructor, in this case node--product
    {
      fields: ["title", "field_date"],
    },
    {
      type: "node--college",
      fields: ["title"],
    },
    {
      type: "node--city",
      fields: ["title"],
    },
  ];
  const products = await productRepository.getList({
    groups,
    filters,
    include,
    sorts,
    page,
    fields,
  });

  // Get list with page limit greater than 50
  const moreProducts = await productRepository.getListRecursive({
    page: { limit: 75 },
  });

  // Get all entities recursivly
  const allProducts = await productRepository.listRecursiveAll();

  // Create new entity
  let attributes = [
    {
      field: "title",
      value: "New Product",
    },
    {
      field: "field_date",
      value: "2022-07-07",
    },
  ];
  let relationships = [
    {
      field: "field_city",
      type: "node--city",
      id: "dc3ca780-7b86-4e7f-b57a-0ea8d9182fca",
    },
    {
      field: "field_categories",
      type: "taxonomy_term--category",
      ids: [
        "dc3ca780-7b86-4e7f-b57a-0ea8d9182fc5",
        "dc3ca780-7b86-4e7f-b57a-0ea8d9182fc6",
        "dc3ca780-7b86-4e7f-b57a-0ea8d9182fc7",
      ],
    },
  ];
  const newProduct = await productRepository.create({
    attributes,
    relationships,
  });

  // Update entity
  id = newProduct.data.id;
  attributes = [
    {
      field: "title",
      value: "Updated Product",
    },
  ];
  const updatedProduct = await productRepository.update({ id, attributes });

  // Delete product
  const deleted = await productRepository.delete({ id });
};
