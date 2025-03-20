import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list-item',
  standalone: false,
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.scss'
})
export class PostListItemComponent implements OnInit {
ngOnInit(): void {
    
  }
  @Input() post!: Post;

}
