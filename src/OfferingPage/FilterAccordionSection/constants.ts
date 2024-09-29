import { TitleI } from "./model";

export const Title:TitleI[] = [
    {
        id: 1,
        parentname: "Fruits",
        childitems:[
            { id: 1, childname: 'Apple' },
            { id: 2, childname: 'Banana' },
            { id: 3, childname: 'Cherry' },
          ]
    },
    {
        id: 2,
        parentname: "Desserts",
        childitems:[
            { id: 1, childname: 'Ice cream' },
            { id: 2, childname: 'Chocolate' },
            { id: 3, childname: 'Warfles' },
          ]
    },    {
        id: 3,
        parentname: "Jobs",
        childitems:[
            { id: 1, childname: 'Icecream' },
            { id: 2, childname: 'Chocolate' },
            { id: 3, childname: 'Warfles' },
          ]
    },
    {
        id: 4,
        parentname: "working",
        childitems:[
            { id: 1, childname: 'Icecream' },
            { id: 2, childname: 'Chocolate' },
            { id: 3, childname: 'Warfles' },
            { id: 4, childname: 'cakessssssss' },
          ]
    },    
  ];