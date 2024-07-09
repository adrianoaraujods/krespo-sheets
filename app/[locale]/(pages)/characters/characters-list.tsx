"use client";

import * as React from "react";
import fallbackImage from "@/public/dnd5.jpg";
import { systems } from "@/systems";
import { zodResolver } from "@hookform/resolvers/zod";
import { CirclePlusIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import type { Character } from "@/lib/schema";

import { Link } from "@/lib/navigation";
import { insertCharacterSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

import { Heading } from "@/components/typography/heading";
import { Paragraph, Span } from "@/components/typography/text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Image } from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TimeAgo } from "@/components/ui/time-ago";
import { toast } from "@/components/ui/use-toast";

import {
  createCharacter,
  deleteCharacter,
  updateCharacter,
} from "@/app/actions/character";

export type CharacterCard = Omit<Character, "createdAt" | "data" | "userId">;

export function CharactersList({
  characters,
}: {
  characters: CharacterCard[];
}) {
  const [chars, setChars] = React.useState(characters);
  const t = useTranslations();

  return (
    <>
      <div className="flex justify-between">
        <Heading type="h2">{t("pages.characters.title")}</Heading>

        <CharacterCreateDialog />
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {chars.map((characterData, i) => (
          <CharacterCard key={`CharacterCard:${characterData.id}`} index={i} />
        ))}
      </div>
    </>
  );

  function CharacterCreateDialog() {
    const [isOpen, setIsOpen] = React.useState(false);

    const defaultValues: Partial<Character> = {
      data: {},
      name: "",
      system: systems[0],
      userId: "",
    };

    const form = useForm<Character>({
      resolver: zodResolver(insertCharacterSchema),
      defaultValues,
    });

    async function onSubmit(formData: Character) {
      const res = await createCharacter(formData);

      if (res.ok) {
        setChars((prev) => {
          const newChar: CharacterCard = {
            description: res.data.description,
            id: res.data.id,
            image: res.data.image,
            lastModifiedAt: res.data.lastModifiedAt,
            name: res.data.name,
            system: res.data.system,
          };

          return [newChar, ...prev];
        });

        form.reset(defaultValues);
        setIsOpen(false);
      } else {
        toast({
          title: t(`pages.characters.responses.${res.status}`),
          variant: "destructive",
        });
      }
    }

    return (
      <Dialog open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
        <DialogTrigger asChild>
          <Button variant="secondary" className="gap-2">
            <CirclePlusIcon />

            <Span>{t("ui.new")}</Span>
          </Button>
        </DialogTrigger>

        <DialogContent>
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle>{t("pages.characters.create.title")}</DialogTitle>
              </DialogHeader>

              <FormField
                control={form.control}
                disabled={form.formState.isSubmitting}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("pages.characters.create.name")}</FormLabel>

                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                disabled={form.formState.isSubmitting}
                name="system"
                render={({ field: { onChange, value, disabled } }) => (
                  <FormItem>
                    <FormLabel>{t("pages.characters.create.system")}</FormLabel>

                    <FormControl>
                      <Select
                        onValueChange={onChange}
                        defaultValue={value}
                        disabled={disabled}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                          {systems.map((system) => (
                            <SelectItem
                              key={`CreateCharacterDialog:${system}`}
                              value={system}
                            >
                              {t(`systems.${system}.title`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="flex-row justify-end">
                <DialogClose asChild>
                  <Button
                    className="w-32"
                    onClick={() => form.reset(defaultValues)}
                    disabled={form.formState.isSubmitting}
                    variant="ghost"
                    type="reset"
                  >
                    {t("ui.cancel")}
                  </Button>
                </DialogClose>

                <Button
                  className="w-32"
                  isLoading={form.formState.isSubmitting}
                  type="submit"
                >
                  <Span>{t("pages.characters.create.button")}</Span>
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  }

  function CharacterCard({ index }: { index: number }) {
    const { description, id, image, lastModifiedAt, name, system } =
      chars[index];
    const [isFetching, setIsFetching] = React.useState(false);

    return (
      <Card className="grid h-44 grid-cols-3 gap-0 overflow-hidden p-0">
        <CharacterCardImage />

        <div className="col-span-2 grid p-4">
          <div>
            <Paragraph variant="muted">
              {t(`systems.${system}.title`)}
            </Paragraph>

            <CharacterCardInput />
          </div>

          <div>
            <Paragraph>{description || ""}</Paragraph>
          </div>

          <div className="mt-auto flex justify-between">
            <Paragraph>
              <TimeAgo date={lastModifiedAt} />
            </Paragraph>

            <div className="flex items-center gap-2">
              <CharacterDeleteButton />

              <Button asChild>
                <Link href={`/characters/${id}`}>{t("ui.open")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );

    function CharacterCardInput() {
      const [inputValue, setInputValue] = React.useState(name);
      const [canEdit, setCanEdit] = React.useState(false);

      const inputRef = React.useRef<HTMLInputElement>(null);

      function onChangeHandler({
        target: { value },
      }: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(value);
      }

      async function onBlurHandler() {
        setCanEdit(false);
        setIsFetching(true);

        const res = await updateCharacter(id, { name: inputValue });

        if (res.ok) {
          setChars((prev) => {
            prev[index].name = res.data.name;
            prev[index].lastModifiedAt = res.data.lastModifiedAt;

            return [...prev];
          });
        } else {
          toast({
            title: t(`pages.characters.responses.${res.status}`),
            variant: "destructive",
          });
        }

        setIsFetching(false);
        setCanEdit(true);
      }

      function onKeyDownHandler({
        key,
      }: React.KeyboardEvent<HTMLInputElement>) {
        if (key === "Enter" && inputRef.current) {
          inputRef.current.blur();
        }
      }

      return (
        <div className="group -mt-2 flex items-center gap-1">
          <Heading type="h3" className="mb-0 text-ellipsis" asChild>
            <Input
              ref={inputRef}
              variant="ghost"
              className={cn("group", isFetching && "text-muted-foreground ")}
              placeholder={t("pages.characters.unnamed")}
              value={inputValue}
              disabled={!canEdit}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              onKeyDown={onKeyDownHandler}
            />
          </Heading>

          <Button
            size="icon"
            variant="ghost"
            className="hidden aspect-square group-hover:flex"
            onClick={() => {
              if (inputRef.current) {
                setCanEdit(true);
                inputRef.current.focus();
              }
            }}
            disabled={isFetching}
          >
            <PencilIcon className="h-5" />
          </Button>
        </div>
      );
    }

    function CharacterCardImage() {
      const [inputValue, setInputValue] = React.useState(image || "");
      const [isOpen, setIsOpen] = React.useState(false);

      const imageSrcRegex = /^(https:\/\/)/;

      const imageSrc = image
        ? imageSrcRegex.test(image || "")
          ? image
          : ""
        : "";

      return (
        <div className="group relative">
          <Image
            className="h-44 w-full object-cover group-hover:opacity-65"
            src={imageSrc}
            fallbackImage={fallbackImage}
            alt={`${name} character image`}
            width={144}
            height={144}
            sizes="144px"
          />

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                className="absolute left-1/2 top-1/2 hidden aspect-square h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-foreground/80 hover:bg-accent-foreground group-hover:flex"
                variant="none"
              >
                <PencilIcon className="text-accent" />
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t("pages.characters.image.title")}</DialogTitle>

                <DialogDescription>
                  {t("pages.characters.image.description")}
                </DialogDescription>
              </DialogHeader>

              <Input
                onChange={({ target: { value } }) => setInputValue(value)}
                value={inputValue}
              />

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost">{t("ui.cancel")}</Button>
                </DialogClose>

                <Button
                  variant="secondary"
                  onClick={async () => {
                    const res = await updateCharacter(id, {
                      image: inputValue,
                    });

                    if (res.ok) {
                      setChars((prev) => {
                        prev[index].image = res.data.image;
                        prev[index].lastModifiedAt = res.data.lastModifiedAt;

                        return [...prev];
                      });
                    } else {
                      toast({
                        title: t(`pages.characters.responses.${res.status}`),
                        variant: "destructive",
                      });
                    }

                    setIsOpen(false);
                  }}
                >
                  {t("ui.confirm")}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    }

    function CharacterDeleteButton() {
      const [isOpen, setIsOpen] = React.useState(false);

      return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon">
              <Trash2Icon />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("pages.characters.delete.title")}</DialogTitle>

              <DialogDescription>
                <span>{t("pages.characters.delete.description")} </span>

                <span className="font-bold text-card-foreground">{name}</span>
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost" className="w-32">
                  {t("ui.cancel")}
                </Button>
              </DialogClose>

              <Button
                variant="destructive"
                className="w-32"
                isLoading={isFetching}
                onClick={async () => {
                  setIsFetching(true);

                  const res = await deleteCharacter(id);

                  if (res.ok) {
                    setChars((prev) =>
                      [...prev].filter((char) => char.id !== id)
                    );
                  } else {
                    toast({
                      title: t(`pages.characters.responses.${res.status}`),
                      variant: "destructive",
                    });
                  }

                  setIsOpen(false);
                  setIsFetching(false);
                }}
              >
                {t("ui.delete")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }
  }
}
