import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("""
                Exercício 1: Digite dois números e 
                um desses operadores aritiméticos (+, -, *, /).
                """);

        System.out.println("Digite o primeiro número: ");
        double n1 = input.nextDouble();

        System.out.println("Digite o segundo número: ");
        double n2 = input.nextDouble();

        System.out.println("Digite um operador aritimético (+, -, *, /):");
        char operator = input.next().charAt(0);

        double result;

        switch (operator) {
            case '+':
                result = n1 + n2;
                break;
            case '-':
                result = n1 - n2;
                break;
            case '*':
                result = n1 * n2;
                break;
            case '/':
                if (n2 != 0) {
                    result = n1 / n2;
                } else {
                    System.out.println("O numéro divisor precisa ser maior que 0");
                    input.close();
                    return;
                }
                break;
            default:
                System.out.println("Operador inválido.");
                input.close();
                return;
        }

        System.out.printf("Resultado da operação: %.2f %c %.2f = %.2f\n", n1, operator, n2, result);

        input.close();
    }
}
