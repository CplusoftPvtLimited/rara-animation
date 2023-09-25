import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import { useHistory } from "react-router";
import axios from "axios";
import "../Blogs Pages/AddBlog.css";

function EditCategory(props) {
  const [categoryData, setCategoryData] = useState();
  const categoryId = props.match.params.categoryId;
  // console.log('categoryId: ', categoryId);
  const history = useHistory();

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    setCategoryData();
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND}/category/${categoryId}`,
    })
      .then((response) => {
        console.log("blogData: ", response);
        setCategoryData(response?.data);
        // console.log('blogData: ', response.data.blogPost);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCategoryData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log("categoryData: ", categoryData);
  };

  const editCategory = (event) => {
    event.preventDefault();

    const updatedData = new FormData();
    updatedData.append("title", categoryData.title);
    console.log("categoryData.title", categoryData.title);
    try {
      axios
        .patch(
          `${process.env.REACT_APP_BACKEND}/category/${categoryId}`,
          categoryData
        )
        .then((response) => {
          setCategoryData({
            title: "",
          });
          history.push("/categories");
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
          <h4>Edit Category</h4>
          <p>
            Please fill the Blog details in the form below to update a Category.
          </p>
          <Card className="add-product-form-card">
            {categoryData && (
              <Form>
                <Row>
                  <Col lg="6">
                    <div className="add-product-input-div">
                      <p>Blog title</p>
                      <input
                        type="text"
                        name="title"
                        value={categoryData.title}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <button
                  onClick={editCategory}
                  type="submit"
                  className="add-category-btn"
                >
                  Update Category
                </button>
              </Form>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EditCategory;
