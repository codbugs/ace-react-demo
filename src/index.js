import React from 'react';
import ReactDOM from 'react-dom';
import { AdaptiveCard } from 'adaptivecards-react';


function App () {
  var card = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
      {
        "type": "TextBlock",
        "text": "Publish Adaptive Card schema",
        "weight": "bolder",
        "size": "medium",
        "wrap": true,
        "style": "heading"
      },
      {
        "type": "ColumnSet",
        "columns": [
          {
            "type": "Column",
            "width": "auto",
            "items": [
              {
                "type": "Image",
                "url": "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg",
                "altText": "Matt Hidinger",
                "size": "small",
                "style": "person"
              }
            ]
          },
          {
            "type": "Column",
            "width": "stretch",
            "items": [
              {
                "type": "TextBlock",
                "text": "Matt Hidinger",
                "weight": "bolder",
                "wrap": true
              },
              {
                "type": "TextBlock",
                "spacing": "none",
                "text": "Created {{DATE(2017-02-14T06:08:39Z, SHORT)}}",
                "isSubtle": true,
                "wrap": true
              }
            ]
          }
        ]
      },
      {
        "type": "TextBlock",
        "text": "Now that we have defined the main rules and features of the format, we need to produce a schema and publish it to GitHub. The schema will be the starting point of our reference documentation.",
        "wrap": true
      },
      {
        "type": "FactSet",
        "facts": [
          {
            "title": "Board:",
            "value": "Adaptive Card"
          },
          {
            "title": "List:",
            "value": "Backlog"
          },
          {
            "title": "Assigned to:",
            "value": "Matt Hidinger"
          },
          {
            "title": "Due date:",
            "value": "Not set"
          }
        ]
      }
    ],
    "actions": [
      {
        "type": "Action.ShowCard",
        "title": "Set due date",
        "card": {
          "type": "AdaptiveCard",
          "body": [
            {
              "type": "Input.Date",
              "label": "Enter the due date",
              "id": "dueDate"
            }
          ],
          "actions": [
            {
              "type": "Action.Submit",
              "title": "OK"
            }
          ]
        }
      },
      {
        "type": "Action.ShowCard",
        "title": "Comment",
        "card": {
          "type": "AdaptiveCard",
          "body": [
            {
              "type": "Input.Text",
              "id": "comment",
              "isMultiline": true,
              "label": "Add a comment"
            }
          ],
          "actions": [
            {
              "type": "Action.Submit",
              "title": "OK"
            }
          ]
        }
      }
    ]
  };


    return <div>
      <h1>Hello World!!!</h1>
      <AdaptiveCard payload={ card } hostConfig={
        { fontFamily: "Segoe UI, Helvetica Neue, sans-serif" }
      } onExecuteAction={ (action) => {
        console.log('>>> onExecuteAction');
        console.log(action);
      }} onActionOpenUrl={ (action) => {
        console.log('>>> onActionOpenUrl');
        console.log(action);
      } }/>
    </div>;
}

const root = ReactDOM.render(<App />, document.getElementById('root'));