import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CartService {
    private count = 0;

    get total() {
        return this.count;
    }

    addToCart() {
        this.count++;
    }
}