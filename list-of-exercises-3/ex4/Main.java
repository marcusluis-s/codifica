import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Exercíco 4: Inverta o número inteiro inserido pelo usuário.\n");

        System.out.println("Digite um número inteiro: ");
        int input = scanner.nextInt();

        String convertIntToString = Integer.toString(input);

        String reversedString = new StringBuilder(convertIntToString).reverse().toString();

        System.out.printf("A ordem reversa dos números que você digitou é: %s\n", reversedString);

        scanner.close();

    }
}
