import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/notes/all");
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome back Vaibhav">
      <Link to="createnote">
        <Button
          style={{
            marginLeft: 10,
            marginBottom: 6,
          }}
          size="lg"
        >
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion defaultActiveKey="1" key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </Accordion.Toggle>
              </span>
              <div>
                <Button href={`/notes/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">Created on </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
