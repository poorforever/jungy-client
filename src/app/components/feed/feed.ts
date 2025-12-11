import { Component } from '@angular/core';
import {Slice} from '../slice/slice';

@Component({
  selector: 'app-feed',
  imports: [
    Slice
  ],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {
  slices: ISlice[] = [
    {
      title: 'American Psycho',
      description: "Reviewers say 'American Psycho' is a provocative film exploring consumerism and identity. Christian Bale's chilling performance as Patrick Bateman is highly praised. The film's dark humor and social commentary effectively critique 1980s yuppie culture. Its unsettling atmosphere is enhanced by stylish visuals and a haunting score. The supporting cast, including Willem Dafoe and Reese Witherspoon, contributes effectively, though some feel underutilized. The ambiguous nature of Bateman's actions adds to the film's disturbing impact."
    },
    {
      title: 'Matrix',
      description: 'Reviewers say \'The Matrix\' is a groundbreaking film that revolutionized science fiction with innovative visual effects and "bullet-time" sequences. It delves into philosophical themes like reality and free will. The film\'s storytelling, character development, and genre blending are highly influential. Keanu Reeves\' performance as Neo is acclaimed, alongside Laurence Fishburne and Carrie-Anne Moss. Its aesthetic and design have significantly impacted cinema. Despite criticisms of sequels and some narrative elements, \'The Matrix\' remains a cultural phenomenon, continuing to inspire and provoke thought.'
    },
    {
      title: 'Kill Bill',
      description: "Reviewers say 'Kill Bill' is acclaimed for its stylized action, dynamic fight scenes, and genre-blending approach. Tarantino's direction and Thurman's performance are praised, along with the eclectic soundtrack and vibrant visuals. However, some find the violence excessive and the narrative simplistic. The film is seen as bold and visually striking, though it divides opinions on artistic merit and storytelling."
    }
  ];

}
