export const store = {
    currentFunds : 0,
    isFirstEdit : true,
    todayId : 1,
    dateList : [],
    detailList : {},
};

export function updateStorage() {
    sessionStorage.setItem("store", JSON.stringify(store));
}

export function initStore(){
    const storage = sessionStorage.getItem("store");
    if(!storage) updateStorage();
    const { dateList, detailList, todayId, currentFunds, isFirstEdit} =
        JSON.parse(storage);

        store.currentFunds = currentFunds;
        store.dateList = dateList;
        store.detailList = detailList;
        store.todayId = todayId;
        store.isFirstEdit = isFirstEdit;
}

export function addNewHistory(newHistory) {
  try {
    // TODO:
    /**
     * - store의 detailList 새로 갱신
     * - store.currentFunds 새로 갱신
     */
    store.detailList = null;
    store.currentFunds = null;

    updateStorage();
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}

export function removeHistory(dateId, itemId) {
  try {
    // TODO:
    /**
     * - store의 detailList 새로 갱신
     * - store.currentFunds 새로 갱신
     */
    store.detailList[dateId] = null;

    updateStorage();
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}
