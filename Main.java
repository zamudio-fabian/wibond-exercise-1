import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingrese un diccionario de palabras separadas por coma (,): ");
        String dicString = scanner.nextLine().replaceAll("\\s+", "");
        System.out.print("Ingrese una palabra de búsqueda: ");
        String word = scanner.nextLine();

        Set<String> dic = new HashSet<> (Arrays.stream(dicString.split(",")).collect(Collectors.toList()));
        System.out.println(getMatchsAsList(word,dic));
    }

    public static List<String> getMatchsAsList(String word, Set<String> dic) {
        List<String> resp = new LinkedList<>();
        int wordLength = word.length();

        for (int i = 0; i < wordLength; i++) {
            for (int j = i; j <= wordLength; j++) {
                String sub = word.substring(i,j);
                if (dic.contains(sub)) {
                    resp.add(sub);
                }
            }
        }

        return resp;
    }
}