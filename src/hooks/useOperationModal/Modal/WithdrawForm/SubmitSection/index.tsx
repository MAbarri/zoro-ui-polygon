/** @jsxImportSource @emotion/react */
import { FormError } from "../useForm/types";
import { PrimaryButton } from "components";
import React, { useMemo } from "react";
import { useTranslation } from "translation";

export interface SubmitSectionProps {
  isFormValid: boolean;
  isFormSubmitting: boolean;
  fromTokenAmountTokens: string;
  formError?: FormError;
}

export const SubmitSection: React.FC<SubmitSectionProps> = ({
  isFormValid,
  isFormSubmitting,
  fromTokenAmountTokens,
  formError,
}) => {
  const { t } = useTranslation();

  const submitButtonLabel = useMemo(() => {
    if (!isFormSubmitting && formError === "HIGHER_THAN_WITHDRAWABLE_AMOUNT") {
      return t(
        "operationModal.withdraw.submitButtonLabel.higherThanWithdrawableAmount"
      );
    }

    if (!isFormValid) {
      return t("operationModal.withdraw.submitButtonLabel.enterValidAmount");
    }

    return t("operationModal.withdraw.submitButtonLabel.withdraw");
  }, [fromTokenAmountTokens, isFormValid, formError, isFormSubmitting]);

  return (
    <PrimaryButton
      type="submit"
      loading={isFormSubmitting}
      disabled={!isFormValid || isFormSubmitting}
      fullWidth
      className="custom-btn-wrap"
    >
      {submitButtonLabel}
    </PrimaryButton>
  );
};

export default SubmitSection;