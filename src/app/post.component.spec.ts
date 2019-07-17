import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostModel } from './post.model';

describe('PostModel', () => {
  let component: PostModel;
  let fixture: ComponentFixture<PostModel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostModel ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
