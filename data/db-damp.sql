PGDMP                         y            students #   12.6 (Ubuntu 12.6-0ubuntu0.20.04.1) #   12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16384    students    DATABASE     z   CREATE DATABASE students WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'ru_RU.UTF-8' LC_CTYPE = 'ru_RU.UTF-8';
    DROP DATABASE students;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    16450    students    TABLE     �   CREATE TABLE public.students (
    id integer NOT NULL,
    full_name character varying,
    born_date date,
    performance integer
);
    DROP TABLE public.students;
       public         heap    postgres    false    3            �           0    0    COLUMN students.performance    COMMENT     �   COMMENT ON COLUMN public.students.performance IS '0 => неудовлетворительно, 1 => удовлетворительно, 2 => хорошо, 3 => отлично';
          public          postgres    false    202            �            1259    16456    students_id_seq    SEQUENCE     �   CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.students_id_seq;
       public          postgres    false    202    3            �           0    0    students_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;
          public          postgres    false    203                       2604    16458    students id    DEFAULT     j   ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);
 :   ALTER TABLE public.students ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202            �          0    16450    students 
   TABLE DATA           I   COPY public.students (id, full_name, born_date, performance) FROM stdin;
    public          postgres    false    202            �           0    0    students_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.students_id_seq', 1, false);
          public          postgres    false    203                       2606    16460    students students_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.students DROP CONSTRAINT students_pkey;
       public            postgres    false    202                       1259    16461    students_performance_idx    INDEX     T   CREATE INDEX students_performance_idx ON public.students USING btree (performance);
 ,   DROP INDEX public.students_performance_idx;
       public            postgres    false    202            �      x������ � �     