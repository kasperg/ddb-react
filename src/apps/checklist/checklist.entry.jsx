import React, { useEffect, useState } from "react";

import Checklist from "./checklist";
import MaterialList from "../../core/MaterialList";

const client = new MaterialList();

function ChecklistEntry() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState("inactive");

  useEffect(function getList() {
    setLoading("active");
    client
      .getList()
      .then(function onResult(result) {
        setList(result);
      })
      .catch(function onError() {
        setList([]);
      })
      .finally(function onEnd() {
        setLoading("finished");
      });
  }, []);

  function onRemove(materialId) {
    const fallbackList = [...list];
    setList(
      list.filter(function removeMaterial(item) {
        return item !== materialId;
      })
    );
    client.deleteListMaterial({ materialId }).catch(function onError() {
      setTimeout(function onRestore() {
        setList(fallbackList);
      }, 2000);
    });
  }
  return <Checklist loading={loading} items={list} onRemove={onRemove} />;
}

export default ChecklistEntry;