import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class QueryPageService {

    public createQueryPage(queryes?: any, populates?: string[], page?: number, limit?: number) {

        let body: Body = {
            queryes: {},
            page: 1,
            limit: 10,
            populates: [],
        }

        if (page && limit) {
            body.page = page;
            body.limit = limit;
        }

        if (queryes) {
            const controls = Object.keys(queryes);
            controls.forEach(control => {
                if (!(queryes.hasOwnProperty(control) && (!!queryes[control]))) {
                    delete queryes[control];
                }
            });
            body.queryes = queryes;
        }

        if (populates) {
            body.populates = populates;
        }
        return body;
    }
}

interface Body {
    queryes: {},
    page: number,
    limit: number,
    populates: string[]
}