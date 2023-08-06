import {
  FormControl,
  FormHelperText,
  FormLabel,
  VStack,
  Radio,
  RadioGroup,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { styled } from "styled-components";

const OfferForm = () => {
  return (
    <Offer>
      <div className="offer_section_heading">
        <h1>$100M Offers</h1>
      </div>
      <div className="offer_section_subheading">
        <h3>From idea to Grand Slam Offer</h3>
      </div>
      <form>
        <div className="form_control form_control_1">
          <label htmlFor="">
            Are you going to IMPROVE your clients health/wealth/relationships?
          </label>
          <div className="radio_group">
            <Radio className="radio" color={"#E2E8F0"} value="Health">
              Health
            </Radio>
            <Radio className="radio" color={"#E2E8F0"} value="Wealth">
              Wealth
            </Radio>
            <Radio className="radio" color={"#E2E8F0"} value="Relationships">
              Relationships
            </Radio>
          </div>
        </div>
        <div className="form_control form_control_2">
          <label htmlFor="">
            What is your target audience within this market? (e.g. entrepreneurs
            looking to scale their business)
          </label>
          <Input placeholder={"Enter response"} />
        </div>
      </form>
    </Offer>
  );
};
const Offer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  div.offer_section_heading {
    text-align: center;
  }

  div.offer_section_heading h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  div.offer_section_subheading {
    text-align: center;
  }
  div.offer_section_subheading h3 {
    color: #7e7e7e;
  }

  form {
    width: 90%;

    .form_control {
      width: 100%;

      label {
        font-weight: 500;
      }
    }

    .form_control_1 label {
      width: 100%;
    }

    .radio {
      font-weight: 400;
    }
  }
`;

export default OfferForm;
