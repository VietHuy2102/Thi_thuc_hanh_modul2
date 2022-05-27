import {commodity} from "./commodity";
export class ManagerCommodity {
    constructor() {
    }
    saveLocalStorage(data) {
        localStorage.setItem('List', JSON.stringify(data))
    }


    loadLocalStorage(): commodity[] | null {
        if (localStorage.hasOwnProperty('List'))
            return JSON.parse(localStorage.getItem('List'));
        return []
    }

    showlist() {
        let html = ""
        let data = this.loadLocalStorage();
        if (!data) {
            data = [];
        } else {
            for (let i = 0; i < data.length; i++) {
                html += `<tr>`
                html += `<td>${i + 1}</td>`
                html += `<td>${data[i]._name}</td>`
                html += `<td>${data[i]._typecommodity}</td>`
                html += `<td><button>Chỉnh Sửa</button></td>`
                html += `<td><button>Xóa</button></td>`
                html += `</tr>`
            }
        }

        document.getElementById(`Listtable`).innerHTML = html
    }

    add(name, typecommodity) {
        let commomdity = new commodity(name, typecommodity)
        let data = this.loadLocalStorage();
        console.log(data)
        if (!data) {
            data = []
        }
        data.push(commomdity);
        console.log(data)
        this.saveLocalStorage(data);
        this.showlist();
    }
    destroy(index){
        let data = this.loadLocalStorage();
        data.splice(index,1);
        confirm(`Bạn chắc chắn muốn xóa chứ`);
        this.saveLocalStorage(data);
        this.showlist();
    }
}