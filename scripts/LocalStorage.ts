export default class LocalStorage {
    private data: any;
    private driverName: string;

    constructor(driverName: string) {
        this.driverName = driverName;
        this.data = JSON.parse(localStorage.getItem(`bc2-${driverName}`) || "{}");
    }

    private update() {
        localStorage.setItem(`bc2-${this.driverName}`, JSON.stringify(this.data));
    }

    public set(key: string, value: string) {
        this.data[key] = { value, date: new Date().toTimeString() };
        this.update();
    }

    public get(key: string): any {
        const res = this.data[key];
        return {
            value: res.value,
            date: new Date(res.date)
        }
    }
}