export function getNestedObject(nestedObj, pathArr) {
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
    nestedObj
  );
}
function makeApiArrayFromObject(data) {
  let arr = [];
  for (const [id, item] of Object.entries(data)) {
    if (item.relationships) {
      for (const [field, relationshipItem] of Object.entries(
        item.relationships
      )) {
        if (relationshipItem.data) {
          makeApiArrayFromObject.call(relationshipItem, relationshipItem.data);
        }
      }
    }
    arr = arr.concat(item);
  }
  this.data = arr;
  return data;
}
function include(resp) {
  let mapTargetId = {};
  let fileMeta = {};
  let myResp = JSON.parse(JSON.stringify(resp));
  myResp.data = {};
  let respData;
  if (!Array.isArray(resp.data)) {
    respData = [];
    respData = respData.concat(resp.data);
  } else {
    respData = resp.data;
  }
  respData.forEach((item) => {
    myResp.data[item.id] = JSON.parse(JSON.stringify(item));
    for (const [field, relationship] of Object.entries(item.relationships)) {
      myResp.data[item.id].relationships[field].data = {};

      if (relationship.data) {
        if (Array.isArray(relationship.data)) {
          relationship.data.forEach((r) => {
            if (!myResp.data[item.id].relationships[field].data[r.id]) {
              myResp.data[item.id].relationships[field].data[r.id] = {};
            }
            myResp.data[item.id].relationships[field].data[r.id] = JSON.parse(
              JSON.stringify(r)
            );

            if (!mapTargetId[r.type]) {
              mapTargetId[r.type] = {};
            }
            if (!mapTargetId[r.type][r.id]) {
              mapTargetId[r.type][r.id] = [];
            }
            mapTargetId[r.type][r.id] = mapTargetId[r.type][r.id].concat({
              field: `data.${item.id}.relationships.${field}.data`,
            });
          });
        } else {
          let r = JSON.parse(JSON.stringify(relationship.data));
          if (!myResp.data[item.id].relationships[field].data[r.id]) {
            myResp.data[item.id].relationships[field].data[r.id] = {};
          }
          myResp.data[item.id].relationships[field].data[r.id] = r;

          if (!mapTargetId[r.type]) {
            mapTargetId[r.type] = {};
          }
          if (!mapTargetId[r.type][r.id]) {
            mapTargetId[r.type][r.id] = [];
          }
          mapTargetId[r.type][r.id] = mapTargetId[r.type][r.id].concat({
            field: `data.${item.id}.relationships.${field}.data`,
          });
        }
      }
    }
  });

  resp.included &&
    resp.included.forEach((item) => {
      if (mapTargetId[item.type] && mapTargetId[item.type][item.id]) {
        mapTargetId[item.type][item.id].forEach((m) => {
          let entityNest = getNestedObject(myResp, m.field.split("."));
          if (entityNest && entityNest[item.id]) {
            entityNest[item.id] = JSON.parse(JSON.stringify(item));
            if (entityNest[item.id].relationships) {
              let tempRelationships = JSON.parse(
                JSON.stringify(entityNest[item.id].relationships)
              );
              for (const [field, relationship] of Object.entries(
                tempRelationships
              )) {
                entityNest[item.id].relationships[field].data = {};

                if (relationship.data) {
                  if (Array.isArray(relationship.data)) {
                    relationship.data.forEach((r) => {
                      if (r.type == "file--file" && r.meta) {
                        fileMeta[r.id] = r.meta;
                      }

                      entityNest[item.id].relationships[field].data[r.id] =
                        JSON.parse(JSON.stringify(r));

                      if (!mapTargetId[r.type]) {
                        mapTargetId[r.type] = {};
                      }
                      if (!mapTargetId[r.type][r.id]) {
                        mapTargetId[r.type][r.id] = [];
                      }
                      mapTargetId[r.type][r.id] = mapTargetId[r.type][
                        r.id
                      ].concat({
                        field:
                          m.field + `.${item.id}.relationships.${field}.data`,
                      });
                    });
                  } else {
                    let r = JSON.parse(JSON.stringify(relationship.data));

                    if (r.type == "file--file" && r.meta) {
                      fileMeta[r.id] = r.meta;
                    }

                    entityNest[item.id].relationships[field].data[r.id] = r;

                    if (!mapTargetId[r.type]) {
                      mapTargetId[r.type] = {};
                    }
                    if (!mapTargetId[r.type][r.id]) {
                      mapTargetId[r.type][r.id] = [];
                    }
                    mapTargetId[r.type][r.id] = mapTargetId[r.type][
                      r.id
                    ].concat({
                      field:
                        m.field + `.${item.id}.relationships.${field}.data`,
                    });
                  }
                }
              }
            }
          }
        });
      }
    });

  makeApiArrayFromObject.call(myResp, myResp.data);
  myResp["fileMeta"] = fileMeta;
  return myResp;
}

function includeArray(arr) {
  let myResp = { data: [], fileMeta: {} };
  arr.forEach((resp) => {
    let tempResp = include(resp);
    myResp.data = myResp.data.concat(tempResp.data);
    myResp.fileMeta = { ...myResp.fileMeta, ...tempResp.fileMeta };
  });
  return myResp;
}

export { include, includeArray };
