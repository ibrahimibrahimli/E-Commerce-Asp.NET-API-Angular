namespace E_Commerce.Application.BaseMesasges
{
    public static class UiMessages
    {

        public static string RequiredMessage(string propertyName)
        {
            return $"{propertyName} boş daxil edilə bilməz";
        }
        public static string MinLengthMessage(string propertyName , int count)
        {
            return $"{propertyName} {count} simvoldan kiçik ola bilməz";
        }
        public static string MaxLengthMessage(string propertyName, int count)
        {
            return $"{propertyName} {count} simvoldan böyük ola bilməz";
        }
        public static string MaxValueMessage(string propertyName, int count)
        {
            return $"{propertyName} {count} rəqəmindən böyük ola bilməz";
        }
        public static string MinValueMessage(string propertyName, int count)
        {
            return $"{propertyName} {count} rəqəmindən kiçik ola bilməz";
        }

        public const string SUCCESS_ADDED_MESSAGE = "Məlumat uğurla əlavə edildi";
        public const string SUCCESS_UPDATED_MESSAGE = "Məlumat uğurla yeniləndi";
        public const string SUCCESS_DELETED_MESSAGE = "Məlumat uğurla silindi";

        //Authentification Messages
        public const string NOT_VALID_EMAIL = "E-poçt doğru deyil";
        public const string NOT_VALID_PHONENUMBER = "Telefon nömrəsi doğru deyil";


        public const string PASSWORD_LESS_THAN_LETTER = "Şifrəniz 8 elementdən azdır";
        public const string PASSWORD_GREAT_THAN_LETTER = "Şifrəniz 16 elementdən çoxdur";
        public const string PASSWORD_NOT_CONTAIN_UPPERCASE = "Şifrəniz kiçik hərflər ehtiva etmir";
        public const string PASSWORD_NOT_CONTAIN_LOWERCASE = "Şifrəniz böyük hərflər ehtiva etmir";
        public const string PASSWORD_NOT_CONTAIN_NUMBER = "Şifrəniz rəqəm ehtiva etmir";
        public const string PASSWORD_NOT_CONTAIN_SYMBOL = "Şifrəniz ən az birini ehtiva etməlidir (!.@.#)";
    }
}
