import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TagTypes } from '../../enums/tag-type.enum';


@Component({
  selector: 'app-featured-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-tag.component.html',
  styleUrl: './featured-tag.component.scss',
})
export class FeaturedTagComponent implements OnChanges {
  @Input() tagText: string = '';
  @Input() icon: string = '';
  @Input() type: TagTypes = TagTypes.primary;
  TagTypes = TagTypes;

  ngOnChanges(changes: SimpleChanges): void {}
}
