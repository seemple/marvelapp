import React from 'react';
import { PageHeader, Row, Col, Button } from 'react-bootstrap';
import BooksTable from './BooksTable';
import styles from './BooksAdmin.css';

const BooksAdmin = props =>
  <div>
    <PageHeader>
      Books admin <small>Create, edit and remove books</small>
    </PageHeader>

    <Row>
      <Col md={12}>
        <div className={styles.mainAction}>
          <Button bsStyle="primary" bsSize="xs" onClick={() => this.addCategory()}>
            New Category
          </Button>
        </div>
      </Col>
    </Row>

    <Row>
      <BooksTable />
    </Row>
  </div>;

export default BooksAdmin;
