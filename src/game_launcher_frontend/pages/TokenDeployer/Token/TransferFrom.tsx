import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAirdrop } from "@/api/minting_deployer";
import Form from "@/components/form/Form";
import FormCheckbox from "@/components/form/FormCheckbox";
import FormNumberInput from "@/components/form/FormNumberInput";
import FormTextArea from "@/components/form/FormTextArea";
import FormTextInput from "@/components/form/FormTextInput";
import FormUploadButton from "@/components/form/FormUploadButton";
import Button from "@/components/ui/Button";
import Space from "@/components/ui/Space";
import SubHeading from "@/components/ui/SubHeading";
import { useTokenTransferFrom } from "@/api/token_deployer";

const scheme = z.object({
    from: z.string().min(1, "From is required."),
    to: z.string().min(1, "to is required."),
    amount: z.string().min(1, "Amount are required."),
});

type Data = z.infer<typeof scheme>;

const TransferFrom = () => {
    const { canisterId } = useParams();

    const { t } = useTranslation();

    const { control, handleSubmit, reset } = useForm<Data>({
        defaultValues: {
            from: "",
            to: "",
            amount: "",
        },
        resolver: zodResolver(scheme),
    });

    const { mutate, isLoading } = useTokenTransferFrom((canisterId != undefined) ? canisterId : "");

    const onSubmit = (values: Data) =>
        mutate(
            { ...values },
            {
                onSuccess: () => reset(),
            },
        );

    return (
        <div>
            <SubHeading>{t("token_deployer.token.transfer_from.title")}</SubHeading>
            <Space />

            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6 md:flex-row">
                    <FormTextInput
                        control={control}
                        name="from"
                        placeholder={t(
                            "token_deployer.token.transfer_from.transfer_from",
                        )}
                    />
                    <FormTextInput
                        control={control}
                        name="to"
                        placeholder={t(
                            "token_deployer.token.transfer_from.transfer_to",
                        )}
                    />
                </div>
                <FormNumberInput
                    control={control}
                    name="amount"
                    min={0}
                    placeholder={t("token_deployer.token.transfer_from.amount")}
                />
                <Button size="big" isLoading={isLoading}>
                    {t("token_deployer.token.transfer_from.transfer_from_button")}
                </Button>
            </Form>

        </div>
    );
};

export default TransferFrom;
