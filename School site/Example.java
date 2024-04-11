import java.sql.*;
import java.util.*;

public class Example {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        // for(int i = 0; i <= 11; i+=2) {
        //     System.out.println(i);
        // }
        
       
    
        for(int i = 2; i<=20; i++)  {
            if(i % 2 != 0) {
                System.out.println(i);
                break;
            } else {
                System.out.println(i);
            }
        }
    }
}