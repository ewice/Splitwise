import { Component, OnInit } from '@angular/core';
import { BalanceService } from 'splitwise';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-balance',
    templateUrl: './balance.component.html',
    styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
    groupId: number | undefined;

    constructor(public balanceService: BalanceService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.groupId = +params['id'];
        });
    }
}
