--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)

-- Started on 2023-07-03 07:32:43 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
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
-- TOC entry 210 (class 1259 OID 81922)
-- Name: list; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.list (
    id integer NOT NULL,
    name text NOT NULL,
    brand text NOT NULL,
    "check" boolean NOT NULL
);


--
-- TOC entry 209 (class 1259 OID 81921)
-- Name: list_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.list_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3356 (class 0 OID 0)
-- Dependencies: 209
-- Name: list_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.list_id_seq OWNED BY public.list.id;


--
-- TOC entry 3209 (class 2604 OID 81925)
-- Name: list id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.list ALTER COLUMN id SET DEFAULT nextval('public.list_id_seq'::regclass);


--
-- TOC entry 3211 (class 2606 OID 81929)
-- Name: list list_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.list
    ADD CONSTRAINT list_pkey PRIMARY KEY (id);


-- Completed on 2023-07-03 07:32:43 -03

--
-- PostgreSQL database dump complete
--

