import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardComponent } from './game-card.component';

describe('GameCardComponent', () => {
  let fixture: ComponentFixture<GameCardComponent>;
  let component: GameCardComponent;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    app = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table for the game squares', () => {
    expect(app.querySelector('#game-card')).toBeTruthy();
  });

  xit('should display the correct name for the given square', () => {
    const squares = {
      '1': [{'name': 'Super Man'},{'name': 'Wonder Woman'},{'name': 'Aquaman'},{'name': 'Robin'},{'name': 'Darth Vader'}],
      '2': [{'name': 'Batman'},{'name': 'Gumby'},{'name': 'Iron Man'},{'name': 'Thor'},{'name': 'Bodhi Rook'}],
      '3': [{'name': 'Deadpool'},{'name': 'Storm'},{'name': 'CENTER'},{'name': 'Black Widow'},{'name': 'Luke Skywalker'}],
      '4': [{'name': 'Logan'},{'name': 'Darth Maul'},{'name': 'Venom'},{'name': 'Nightwing'},{'name': 'Groot'}],
      '5': [{'name': 'Woverine'},{'name': 'Link'},{'name': 'Captain America'},{'name': 'Ren'},{'name': 'Frodo'}]
    };
    component.squares = squares;
    fixture.detectChanges();
    // expect(app.querySelector())
  });
});
