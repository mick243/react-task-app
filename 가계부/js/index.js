import { initStore } from "./store";
import { initHistoryList } from "./history-list";
import { initCurrentAsset} from "./current-asset";
import { initAddItem } from "./add-item"

init();

function init() {
    initStore();
    initHistoryList();
    initCurrentAsset();
    initAddItem();
}
