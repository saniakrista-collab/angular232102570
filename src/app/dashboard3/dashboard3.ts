import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sidebar } from "../sidebar/sidebar";
import { Footer } from "../footer/footer";
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-dashboard3',
  imports: [RouterModule, Navbar, Sidebar, Footer],
  templateUrl: './dashboard3.html',
  styleUrl: './dashboard3.css'
})
export class Dashboard3 {

}
