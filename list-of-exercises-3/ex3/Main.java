import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Exercício 3: Sequência de Fibonacci.");

        System.out.println();

        System.out.println("Digite um número: ");
        int n = input.nextInt();

        input.close();

        System.out.println("Os primeiros " + n + " números da sequência de Fibonacci são: ");
        for (int i = 0; i < n; i++) {
            System.out.println(fibo(i) + " ");
        }

    }

    public static int fibo(int n) {
        return switch (n) {
            case 0 -> 0;
            case 1 -> 1;
            default -> fibo(n - 1) + fibo(n - 2);
        };
    }
}
