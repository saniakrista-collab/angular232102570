import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sidebar } from "../sidebar/sidebar";
import { Footer } from "../footer/footer";
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-dashboard2',
  imports: [RouterModule, Navbar, Sidebar, Footer],
  templateUrl: './dashboard2.html',
  styleUrl: './dashboard2.css'
})
export class Dashboard2 {

}
