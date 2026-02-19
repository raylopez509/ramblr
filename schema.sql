--
-- PostgreSQL database dump
--

\restrict CIVC0MrqTj8t0bHx2YAYCffPGjzjae1bnSAdkNIsd4mjCahg844pcAmtz88L22G

-- Dumped from database version 18.1 (Debian 18.1-1.pgdg13+2)
-- Dumped by pg_dump version 18.1 (Debian 18.1-1.pgdg13+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    post_id integer NOT NULL,
    title character varying(80) NOT NULL,
    content character varying,
    tags character varying(20)[],
    date_created timestamp with time zone NOT NULL,
    owner character varying(20) NOT NULL
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- Name: posts_post_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.posts_post_id_seq OWNER TO postgres;

--
-- Name: posts_post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_post_id_seq OWNED BY public.posts.post_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    username character varying(20) NOT NULL,
    password character varying(50)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: posts post_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN post_id SET DEFAULT nextval('public.posts_post_id_seq'::regclass);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (post_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (username);


--
-- Name: posts owner_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT owner_fk FOREIGN KEY (owner) REFERENCES public.users(username);


--
-- PostgreSQL database dump complete
--

\unrestrict CIVC0MrqTj8t0bHx2YAYCffPGjzjae1bnSAdkNIsd4mjCahg844pcAmtz88L22G

