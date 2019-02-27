import React from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";

const Policy = ({ policy }) => {
  return (
    <div>
      <Header textLabel="Expense Policy" textTitle="Expense Policy" />
      <p>
        Lorem ipsum dolor sit amet, veri omnis duo ex, eu vim integre dolores
        qualisque. Ex his magna <strong>{policy.companyName}</strong>, inermis
        detracto mel id, aeterno aperiri admodum an eos. An usu volumus
        delicatissimi. Detraxit appellantur cu mei. Ut consul latine sed. Malis
        audiam vel at, at patrioque repudiandae his.
      </p>
      <p>
        Lorem ipsum <strong>{policy.numberOfEmployees}</strong> sit amet, veri
        omnis duo ex, eu vim integre dolores qualisque. Ex his magna similique,
        inermis detracto mel id, aeterno aperiri admodum an eos. An usu volumus
        delicatissimi. Detraxit appellantur cu mei. Ut consul latine sed. Malis
        audiam vel at, at patrioque repudiandae his.
      </p>
      <p>
        Lorem ipsum <strong>{policy.budget}</strong> sit amet, veri omnis duo
        ex, eu vim integre dolores qualisque. Ex his magna similique, inermis
        detracto mel id, aeterno aperiri admodum an eos. An usu volumus
        delicatissimi. Detraxit appellantur cu mei. Ut consul latine sed. Malis
        audiam vel at, at patrioque repudiandae his.
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  policy: state.policy,
});

export default connect(mapStateToProps)(Policy);
