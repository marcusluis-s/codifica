import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int[] numbers = new int[50];

        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = i + 1;
        }

        Random random = new Random();

        // Gera um número inteiro aleatório entre 0 e 49
        int randomIndex = random.nextInt(numbers.length);

        int randomNumber = numbers[randomIndex];

        System.out.println("Exercício 6: Jogo do Adivinha.\n");

        System.out.println("Digite um número entre 1 e 50");
        int input = scanner.nextInt();

        while (randomNumber != input) {
            System.out.println("Entrada incorreta. Tente novamente.");
            System.out.println("Digite um número entre 1 e 50");
            input = scanner.nextInt();
        }

        System.out.printf("""
                Entrada correta!
                O número aleatório entre 1 e 50 selecionado pelo programa é %d,
                que é igual ao número que você digitou: %d.
                """, randomNumber, input);

        scanner.close();

    }
}
