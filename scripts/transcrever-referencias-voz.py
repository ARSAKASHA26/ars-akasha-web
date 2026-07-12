from __future__ import annotations

import argparse
from pathlib import Path

from faster_whisper import WhisperModel


def format_timestamp(seconds: float) -> str:
    minutes, seconds = divmod(int(seconds), 60)
    return f"{minutes:02d}:{seconds:02d}"


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Transcreve referencias de voz locais para analise editorial."
    )
    parser.add_argument("input_dir", type=Path)
    parser.add_argument("output_file", type=Path)
    parser.add_argument("--pattern", default="WhatsApp Audio 2026-07-11*.mp4")
    parser.add_argument("--model", default="small")
    args = parser.parse_args()

    files = sorted(args.input_dir.glob(args.pattern))
    if not files:
        raise SystemExit("Nenhum audio encontrado para o padrao informado.")

    model = WhisperModel(args.model, device="cpu", compute_type="int8")
    sections: list[str] = [
        "# Transcricoes de referencia - Mago Hns Re",
        "",
        "> Material privado de trabalho. Nao publicar nem incluir no site.",
        "",
    ]

    for audio_file in files:
        segments, info = model.transcribe(
            str(audio_file),
            language="pt",
            beam_size=5,
            vad_filter=True,
            condition_on_previous_text=True,
        )
        sections.extend(
            [
                f"## {audio_file.name}",
                "",
                f"Idioma: {info.language} | Duracao: {info.duration:.1f}s",
                "",
            ]
        )
        for segment in segments:
            text = segment.text.strip()
            if text:
                sections.append(
                    f"[{format_timestamp(segment.start)}-{format_timestamp(segment.end)}] {text}"
                )
        sections.append("")

    args.output_file.parent.mkdir(parents=True, exist_ok=True)
    args.output_file.write_text("\n".join(sections), encoding="utf-8")
    print(f"Transcricoes gravadas em {args.output_file}")


if __name__ == "__main__":
    main()
