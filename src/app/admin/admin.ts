import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';
import { Content } from '../content/content';
import { Footer } from '../footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [Navbar, Sidebar,Content,Footer, RouterModule ],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

}
