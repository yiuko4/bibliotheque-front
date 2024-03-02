import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import {SearchService} from "../services/search/search.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private searchService: SearchService) {}

}
