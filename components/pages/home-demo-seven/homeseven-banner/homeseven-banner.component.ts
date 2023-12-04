import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-homeseven-banner',
    templateUrl: './homeseven-banner.component.html',
    styleUrls: ['./homeseven-banner.component.scss']
})
export class HomesevenBannerComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}