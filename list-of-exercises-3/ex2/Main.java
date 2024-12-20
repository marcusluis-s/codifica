import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Exercício 2: Verifique se a palavra é um palíndromo.");

        System.out.println("Digite uma palavra: ");
        String word = input.nextLine();

        String cleanedInput = word.replace(" ", "").toLowerCase();

        if (isPalindrome(cleanedInput)) {
            System.out.printf("A palavra %s é um palíndromo!", cleanedInput);
        } else {
            System.out.printf("A palavra %s não é um palíndromo.", cleanedInput);
        }

        input.close();

    }

    public static boolean isPalindrome(String s) {
        int N = s.length();

        for (int i = 0; i < N / 2; i++) {
            if (s.charAt(i) != s.charAt(N - 1 - i)) {
                return false;
            }

        }
        return true;
    }
}
