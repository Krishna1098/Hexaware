import React, { Component } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCardLink,
  MDBCol
} from 'mdb-react-ui-kit';
import './View.css';
import './Marque.css';


export class Card extends Component{
    render(){
    return (
        <div className='App container'>
    <header>
    <h3 className="d-flex justify-content-center header-1">Welcome to CMS</h3>
    </header>
    <marquee>Hexaware Technologies pvt.ltd</marquee>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage
                src='https://hexaware.com/wp-content/uploads/2021/03/Great-Place-to-Work-374-X-200.jpg'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>Add New Project</MDBCardTitle>

              </MDBCardBody>
              <MDBCardBody>
                   <MDBCardLink href='#'>Visit the page</MDBCardLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage
                src='https://uploads-ssl.webflow.com/5e58e65af68ab82f3ea992dc/61e96e63933e1b0d11b927b9_Utiliser%20un%20outil%20de%20ticketing.png'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>Raise a Ticket</MDBCardTitle>
              </MDBCardBody>
              <MDBCardBody>
                   <MDBCardLink href='#'>Visit the page</MDBCardLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage
                src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>Tax/Invoice</MDBCardTitle>

              </MDBCardBody>
              <MDBCardBody>
                   <MDBCardLink href='#'>Visit the page</MDBCardLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage
                src='https://media.istockphoto.com/vectors/need-help-advertising-sign-with-megaphone-vector-id1248228405?k=20&m=1248228405&s=612x612&w=0&h=VOcUeEC1dGASsdpT6m5ygcCMo5q_ZmpPBQE4OkTjs0o='
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>Support/Help</MDBCardTitle>

              </MDBCardBody>
              <MDBCardBody>
                   <MDBCardLink href='#'>Visit the page</MDBCardLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <a class="btn btn-primary m-2 float" href="/home" role="button">Back to Home</a>

        </div>
      );
}
}
