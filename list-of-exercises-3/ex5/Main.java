import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {

    // Remove todos os caracteres que não são letras e converte a string para
    // minúsculas.
    static String preprocess(String source) {
        return source.replaceAll("[^a-zA-Z]", "").toLowerCase();
    }

    // Verifica se duas strings são anagramas
    static boolean isAnagramMultiset(String string1, String string2) {
        Map<Character, Integer> charCountMap = new HashMap<>();

        // Contar caracteres da primeira string
        for (char c : string1.toCharArray()) {
            charCountMap.put(c, charCountMap.getOrDefault(c, 0) + 1);
        }

        // Subtrair contagem de caracteres da segunda string
        for (char c : string2.toCharArray()) {
            if (!charCountMap.containsKey(c)) {
                return false; // Se um caractere não está na primeira string
            }
            charCountMap.put(c, charCountMap.get(c) - 1);
            if (charCountMap.get(c) < 0) {
                return false; // Se a contagem ficar negativa
            }
        }

        // Verifica se todos os contadores estão zerados
        for (int count : charCountMap.values()) {
            if (count != 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Exercício 5: Verificador de Anagramas.\n");

        System.out.print("Digite a primeira palavra: ");
        String word1 = scanner.nextLine();

        System.out.print("Digite a segunda palavra: ");
        String word2 = scanner.nextLine();

        // Verifica se as palavras são anagramas
        boolean result = isAnagramMultiset(preprocess(word1), preprocess(word2));

        if (result) {
            System.out.println("As palavras são anagramas.");
        } else {
            System.out.println("As palavras não são anagramas.");
        }

        scanner.close();
    }
}

