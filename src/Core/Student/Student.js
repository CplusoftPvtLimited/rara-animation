import React, { useEffect, useState, useRef } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import { useHistory } from "react-router";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import "./Student.css";

function EditStudent(props) {
  const [studentData, setStudentData] = useState();
  const history = useHistory();

  useEffect(() => {
    getStudent();
  }, []);

  const getStudent = () => {
    setStudentData();
    axios({
      method: "get",
      url: `http://localhost:4500/api/student/getStudentPage/1`,
    })
      .then((response) => {
        setStudentData(response.data.student[0]);
        console.log("****studentData: ", response.data.student[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prev) => ({ ...prev, [name]: value }));
  };
  const editStudent = (event) => {
    event.preventDefault();
    const updatedData = new FormData();
    for (const [key, value] of Object.entries(studentData)) {
      updatedData.append(key, value);
      console.log("Updated Data:", key, value);
    }

    // const updatedData = new FormData();
    // updatedData.append("about", studentData.about);
    // console.log("***Here-------- ", updatedData.about);
    // updatedData.append("program", studentData.program);
    // updatedData.append("businessPassage", studentData.businessPassage);
    // updatedData.append("specializedField", studentData.specializedField);
    // updatedData.append("externalCommittee", studentData.externalCommittee);
    // updatedData.append("outline", studentData.outline);
    // updatedData.append("targetAudience", studentData.targetAudience);
    // updatedData.append("responsibilities", studentData.responsibilities);
    // updatedData.append("recruitment", studentData.recruitment);
    try {
      console.log("***updatedData: ", updatedData);
      axios
        .put(
          `http://localhost:4500/api/student/updateStudentPage/1`,
          updatedData
        )
        .then((response) => {
          console.log("edit data", response);
          history.push("/");
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    } catch (err) {
      console.log("Error: " + err.message);
    }
  };

  return (
    <div className="dashboard-parent-div">
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col className="add-category-content" lg={10}>
          <h4>Edit Student Page</h4>
          <p>
            Please fill the details in the form below to update student page.
          </p>
          <Card className="add-product-form-card">
            {studentData && (
              <Form>
                <Row>
                  <div className="main">
                    <h2> About</h2>
                  </div>
                  <Row>
                    <Col>
                      <div className="add-product-input-div">
                        <p>About RARA</p>

                        <CKEditor
                          style={{ height: "100px" }}
                          editor={ClassicEditor}
                          data={studentData.about}
                          onReady={(editor) => {
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log("Editor Data:", data);
                            handleChange({
                              target: { name: "about", value: data },
                            });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="add-product-input-div">
                        <p>Program</p>
                        <CKEditor
                          style={{ height: "100px" }}
                          editor={ClassicEditor}
                          data={studentData.program}
                          onReady={(editor) => {
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log("Editor Data:", data);
                            handleChange({
                              target: { name: "program", value: data },
                            });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="add-product-input-div">
                        <p>Business Management</p>
                        <CKEditor
                          style={{ height: "100px" }}
                          editor={ClassicEditor}
                          data={studentData.businessPassage}
                          onReady={(editor) => {
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log("Editor Data:", data);
                            handleChange({
                              target: { name: "businessPassage", value: data },
                            });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="add-product-input-div">
                        <p>Specialized</p>
                        <CKEditor
                          style={{ height: "100px" }}
                          editor={ClassicEditor}
                          data={studentData.specializedField}
                          onReady={(editor) => {
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log("Editor Data:", data);
                            handleChange({
                              target: { name: "specializedField", value: data },
                            });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div>
                    </Col>

                    <Col>
                      <div className="add-product-input-div">
                        <p>External Committee</p>
                        <CKEditor
                          style={{ height: "100px" }}
                          editor={ClassicEditor}
                          data={studentData.externalCommittee}
                          onReady={(editor) => {
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log("Editor Data:", data);
                            handleChange({
                              target: {
                                name: "externalCommittee",
                                value: data,
                              },
                            });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div className="add-product-input-div">
                        <p>Outline</p>
                        <CKEditor
                          style={{ height: "100px" }}
                          editor={ClassicEditor}
                          data={studentData.outline}
                          onReady={(editor) => {
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log("Editor Data:", data);
                            handleChange({
                              target: { name: "outline", value: data },
                            });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div className="add-product-input-div">
                        <p>Target Audience</p>
                        <CKEditor
                          style={{ height: "100px" }}
                          editor={ClassicEditor}
                          data={studentData.targetAudience}
                          onReady={(editor) => {
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log("Editor Data:", data);
                            handleChange({
                              target: { name: "targetAudience", value: data },
                            });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div>
                    </Col>

                    <Col>
                      <div className="add-product-input-div">
                        <p>Responsibilities</p>
                        <CKEditor
                          style={{ height: "100px" }}
                          editor={ClassicEditor}
                          data={studentData.responsibilities}
                          onReady={(editor) => {
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log("Editor Data:", data);
                            handleChange({
                              target: { name: "responsibilities", value: data },
                            });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div className="add-product-input-div">
                        <p>Call For Application</p>
                        <CKEditor
                          style={{ height: "100px" }}
                          editor={ClassicEditor}
                          data={studentData.recruitment}
                          onReady={(editor) => {
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log("Editor Data:", data);
                            handleChange({
                              target: { name: "recruitment", value: data },
                            });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </Row>

                <button
                  onClick={editStudent}
                  type="submit"
                  className="add-category-btn"
                >
                  Update Info
                </button>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EditStudent;
