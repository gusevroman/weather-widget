import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const FormTop = props => {
  return (
    <>
      <Form inline>
        <FormGroup className="col-12 col-md-8 col-lg-9 m-0">
          {/*<Label for="exampleInput">Город</Label>*/}
          <Input className="col-12" placeholder="Ведите название города" />
        </FormGroup>
        <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
          <Button outline color="primary" className="col-12">Запросить погоду</Button>
        </div>
      </Form>
    </>
  );
};

export default FormTop;
