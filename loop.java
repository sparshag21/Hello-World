public class loop {
    public static void main(String[] java){
        for(int i=1; i<5; i++){
            String print = new String(new char[i]).replace('\0','*');
            System.out.println(print);
        }
    }
}