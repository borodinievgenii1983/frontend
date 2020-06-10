export class Category {
    id: number;
    title: string;
    completedTotal: number;
    uncompletedCount: number;

    // ? означает необязательный для передачи параметр
    constructor(id: number, title: string, completedTotal?: number, uncompletedCount?: number) {
        this.id = id;
        this.title = title;
        this.completedTotal = completedTotal;
        this.uncompletedCount = uncompletedCount;
    }
}
