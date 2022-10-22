import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sekoly',
    templateUrl: './sekoly.component.html',
    styleUrls: ['./sekoly.component.scss']
})

export class SekolyComponent implements OnInit{
    isaKilasy: string;
    count: number = 0;

    constructor() {
    }

    ngOnInit() {
    }

    onEcrireIsa(event: Event): void {
        this.isaKilasy = (<HTMLInputElement>event.target).value;
    }

    increment() {
        this.count++
    }

    decrement() {
        this.count--
    }

}