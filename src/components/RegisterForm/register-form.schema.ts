import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf-validator";

export const registerUserFormSchema = z
  .object({
    firstName: z.string().min(1, "O primeiro nome é obrigatório"),
    lastName: z.string().min(1, "O último nome é obrigatório"),
    email: z.string().email("E-mail inválido").min(1, "O e-mail é obrigatório"),

    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),

    confirmPassword: z.string().min(1, "A confirmação de senha é obrigatória"),

    cpf: z
      .string()
      .min(11, "O CPF é obrigatório")
      .refine(isValidCPF, "CPF inválido"),

    birthDate: z
      .string()
      .refine(
        (date) => !isNaN(Date.parse(date)),
        "Data de nascimento inválida",
      ),

    phone: z
      .string()
      .nonempty("O número de celular é obrigatório")
      .refine(
        (number) => /^\d{10,11}$/.test(number.replace(/\D/g, "")),
        "Número de celular inválido",
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    criteriaMode: "all",
  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    setError,
    reset,
  };
};
