import { Component, OnInit } from '@angular/core';
import {CoreModule} from '../core.module';
import {StoryService} from '../../services/story.service';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {Story} from '../../../Models/Story';
import {Observable} from 'rxjs';
import {faYCombinator} from '@fortawesome/free-brands-svg-icons/faYCombinator';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown';


@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  githubIcon = faGithub;
  mainIcon = faYCombinator;
  downChevronIcon = faChevronDown;


  newStoryIds: number[] = [];

  currentPageNumber = 1;
  storiesPerPage = 10;
  totalStories: number;
  paginationDropdown = false;


  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.storyService.GetNewStoryList().subscribe(idList => {
      this.newStoryIds = idList;
      this.totalStories = idList.length;

    });
  }

  UpdatePage(event): void {
    this.currentPageNumber = event;
  }

  setStoriesPerPage(value: number): void {
    this.storiesPerPage = value;
  }

  toggleDropdown(): void {
    this.paginationDropdown
      ? this.paginationDropdown = false
      : this.paginationDropdown = true;
  }
}
