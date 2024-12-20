import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Exercício 7: Conta o número de palavras em uma frase.");

        System.out.println("Digite uma frase: ");
        String input = scanner.nextLine();

        String[] sentence = input.trim().split("\\s+");

        int wordCount = sentence.length;

        System.out.println("O número de palavras na frase é: " + wordCount);

        scanner.close();

    }
}
