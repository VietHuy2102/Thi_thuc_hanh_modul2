import { ManagerCommodity } from "./ManagerCommodity";
let managerCommodity = new ManagerCommodity();
managerCommodity.showlist();
function save() {
    let name = document.getElementById(`name`).value;
    let commodity = document.getElementById(`commodity`).value;
    managerCommodity.add(name, commodity);
}
let btnAdd = document.getElementById(`add`);
btnAdd.addEventListener(`click`, save);
managerCommodity.loadLocalStorage();
function deleteCommodity() {
    let btnDelete = document.getElementsByClassName(`delete`);
    for (let i = 0; i < btnDelete.length; i++) {
        btnDelete[i].addEventListener(`click`, () => {
            managerCommodity.destroy(i);
            deleteCommodity();
        });
    }
}
deleteCommodity();
//# sourceMappingURL=main.js.map